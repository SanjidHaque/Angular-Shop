using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularShopBE.Models
{
    public class Product
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string CreatedDate { get; set; } 
    }
}