using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace AngularRoutes.Data
{
    /* This is used if database provider does't define
     * IAngularRoutesDbSchemaMigrator implementation.
     */
    public class NullAngularRoutesDbSchemaMigrator : IAngularRoutesDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}