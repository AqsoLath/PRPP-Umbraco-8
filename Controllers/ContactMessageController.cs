using System.Web.Mvc

namespace .Controllers
{
    public class ContactMessageController : Umbraco.Web.Mvc.SurfaceController
    {
        [HttpPost]
    [ValidateAntiForgeryToken]
    [ValidateUmbracoFormRouteString]
		public async Task<IActionResult> HandleContactMessage(ContactMessageModel model)
		{
			//Console.WriteLine("ModelState.IsValid: " + ModelState.IsValid.ToString());
			//Console.WriteLine("model.Name: " + model.Name.ToString());
			//Console.WriteLine("model.Email: " + model.Email.ToString());
			//Console.WriteLine("model.Role: " + model.Role.ToString());
			//Console.WriteLine("m
		}
    }
}