using Umbraco.Web.PublishedModels;
namespace App_Code.Models 
{
    public partial class ContactFormModel : PublishedContentModel 
    {
        public int? Id { get; set; }
        public string Nama { get; set; }
        public string Email { get; set; }
        public string Pesan { get; set; }
    }
}