using AutoMapper;
using eshop_api.DTO;
using eshop_api.Exceptions;
using eshop_api.Interfaces;
using eshop_api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using eshop_api.Auth;

namespace eshop_api.Controllers
{
    [Route("api/customers")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        private readonly IAuthManager authManager;

        public CustomersController(IUnitOfWork unitOfWork, IMapper mapper, IAuthManager authManager)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
            this.authManager = authManager;
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var customer = await unitOfWork.Customers.GetOneByQueryAsync(q => q.Id == id);
            if (customer == null)
            {
                throw new EntityNotFoundException($"Customer with id {id} not found");
            }
            var result = mapper.Map<CustomerDTO>(customer);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CustomerCreateDTO customerCreateDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var customer = mapper.Map<Customer>(customerCreateDTO);
            await unitOfWork.Customers.InsertAsync(customer);
            await unitOfWork.SaveAsync();
            var result = mapper.Map<CustomerDTO>(customer);
            return Ok(result);
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginDTO userLoginDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var customer = await unitOfWork.Customers.GetOneByQueryAsync(q => q.Email == userLoginDTO.Email);
            if ((customer == null) || (!customer.Password.Equals(userLoginDTO.Password)))
            {
                throw new EntityNotFoundException($"Customer with e-mail {userLoginDTO.Email} not found or password incorrect");
            }

            var result = mapper.Map<CustomerDTO>(customer);

            return Ok(result);
        }

    }
}
