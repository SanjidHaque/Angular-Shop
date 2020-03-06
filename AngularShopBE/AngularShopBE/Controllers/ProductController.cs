using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using AngularShopBE.Models;

namespace AngularShopBE.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProductController : ApiController
    {
        private readonly ApplicationDbContext _context;

        public ProductController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        [Route("api/GetAllProduct")]
        public IHttpActionResult GetAllProduct()
        {
            List<Product> products = _context.Products.AsNoTracking().ToList();
            return Ok(products);
        }

        [HttpPost]
        [Route("api/AddProduct")]
        public IHttpActionResult AddProduct(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();

            return Ok();
        }

        [HttpPut]
        [Route("api/EditProduct")]
        public IHttpActionResult EditProduct(Product product)
        {
            Product getProduct = _context.Products.FirstOrDefault(x => x.Id == product.Id);
            if (getProduct != null)
            {
                getProduct.Name = product.Name;
                getProduct.Category = product.Category;
                _context.SaveChanges();
            }
            
            return Ok();
        }

        [HttpDelete]
        [Route("api/DeleteProduct/{productId}")]
        public IHttpActionResult DeleteProduct(long productId)
        {
            Product product = _context.Products.FirstOrDefault(x => x.Id == productId);
            if (product != null)
            {
                _context.Products.Remove(product);
                _context.SaveChanges();
            }

            return Ok();
        }
    }
}
