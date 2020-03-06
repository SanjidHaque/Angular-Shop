using System.ComponentModel;
using AngularShopBE.Models;

namespace AngularShopBE.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AngularShopBE.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(AngularShopBE.Models.ApplicationDbContext context)
        {
            context.Products.AddOrUpdate(x => x.Id,
                new Product { Name = "Rice", Category = "Grocery", CreatedDate = "1/21/2020" },
                new Product { Name = "Onion", Category = "Grocery", CreatedDate = "1/21/2020" },
                new Product { Name = "Beef", Category = "Grocery", CreatedDate = "1/21/2020" },
                new Product { Name = "Chicken", Category = "Grocery", CreatedDate = "1/21/2020" },
                new Product { Name = "Paper", Category = "Stationary", CreatedDate = "1/21/2020" },
                new Product { Name = "Pencil", Category = "Stationary", CreatedDate = "1/21/2020" },
                new Product { Name = "Sharpner", Category = "Stationary", CreatedDate = "1/21/2020" }
             );
        }
    }
}
