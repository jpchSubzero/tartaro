using System.Threading.Tasks;

namespace AngularRoutes.Data
{
    public interface IAngularRoutesDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
