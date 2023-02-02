using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

// using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net;
using System.IO;



using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Core.Services;

using Umbraco.Web.Models;
using Umbraco.Web.Mvc;

using Newtonsoft.Json;

using App_Code.Models;


namespace App_Code.Controllers
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

                string response = model.Recaptcha;

                var valid = Validate(response);

                if (valid == "false")
                {
                    Console.WriteLine("Authentification False");
                    throw new Exception();
                }

                var parentGuid = Guid.Parse("7e854621-8ba2-4539-8f07-a09184ecf403");
                var contactMessage = _contentService.Create(System.Guid.NewGuid().ToString(), parentGuid, "contactMessages");

                contactMessage.Properties["contactNama"].SetValue(model.Nama);
                contactMessage.Properties["contactEmail"].SetValue(model.Email);
                contactMessage.Properties["contactPesan"].SetValue(model.Pesan);
                contactMessage.Properties["contactStatus"].SetValue(JsonConvert.SerializeObject(new[] { "Belum Dibaca" }));

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

        public static string Validate(string EncodedResponse)
        {
            var client = new System.Net.WebClient();

            string PrivateKey = "6LdcQs0iAAAAAIeTZb7l3-j0VJZy6yAvXqXpuyNc";

            var GoogleReply = client.DownloadString(string.Format("https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}", PrivateKey, EncodedResponse));

            var captchaResponse = Newtonsoft.Json.JsonConvert.DeserializeObject<ContactController>(GoogleReply);

            return captchaResponse.Success.ToLower();
        }

        [JsonProperty("success")]
        public string Success
        {
            get { return m_Success; }
            set { m_Success = value; }
        }

        private string m_Success;
        [JsonProperty("error-codes")]
        public List<string> ErrorCodes
        {
            get { return m_ErrorCodes; }
            set { m_ErrorCodes = value; }
        }

        private List<string> m_ErrorCodes;
    }
}