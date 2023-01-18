using System.Web.Mvc;

// using Microsoft.AspNetCore.Mvc;
// using Microsoft.Extensions.Logging;

using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Core.Services;
using Umbraco.Web.Mvc;
using Umbraco.Web.PublishedModels;

namespace App_Data.Controllers
{
    public class ContactController : SurfaceController
    {
        private IContentService _contentService;

        public ContactController(
            IContentService contentService
        )
        {
            _contentService = contentService;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [ValidateUmbracoFormRouteString]
        public ActionResult DoRegister(ContactFormModel model)
        {
            try
            {
                if (ModelState.IsValid == false)
                {
                    Console.WriteLine("ModelState.IsValid: false");
                    throw new Exception();
                }

                var parentGuid = Guid.Parse("7e854621-8ba2-4539-8f07-a09184ecf403");
                var contactMessage = _contentService.Create(System.Guid.NewGuid().ToString(), parentGuid, "contactMessages");

                contactMessage.Properties["contactNama"].SetValue(model.Nama);
                contactMessage.Properties["contactEmail"].SetValue(model.Email);
                contactMessage.Properties["contactPesan"].SetValue(model.Pesan);

                _contentService.SaveAndPublish(contactMessage);

                TempData["error"] = true;

                return RedirectToCurrentUmbracoPage();
            }
            catch (Exception e)
            {
                Console.WriteLine("DoRegister.e: " + e.Message);
                TempData["error"] = false;
                return CurrentUmbracoPage();
            }
        }
    }
}