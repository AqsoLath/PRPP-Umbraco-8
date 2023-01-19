using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

using Umbraco.Core.Models;
using Umbraco.Web.Models;
namespace App_Code.Models 
{
    public class ContactFormModel 
    {
        public int? Id { get; set; }
        public string Nama { get; set; }
        public string Email { get; set; }
        public string Pesan { get; set; }
    }
}