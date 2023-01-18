using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Web.Common.Models;
namespace App_Code.Models 
{
    public partial class ContactFormModel : PostRedirectModel 
    {
        public int? Id { get; set; }
        public string Nama { get; set; }
        public string Email { get; set; }
        public string Pesan { get; set; }
    }
}