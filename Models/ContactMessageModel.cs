using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Umbraco.Cms.Core.Models;

namespace Models;

public class ContactMessageModel
{
    public string? Nama { get; set; }
    public string? Email { get; set; }
    public string? Message { get; set; }
  
}