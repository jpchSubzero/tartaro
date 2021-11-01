using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using AngularRoutes.Data;
using Volo.Abp.DependencyInjection;

namespace AngularRoutes.EntityFrameworkCore
{
    public class EntityFrameworkCoreAngularRoutesDbSchemaMigrator
        : IAngularRoutesDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreAngularRoutesDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the AngularRoutesDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<AngularRoutesDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}
