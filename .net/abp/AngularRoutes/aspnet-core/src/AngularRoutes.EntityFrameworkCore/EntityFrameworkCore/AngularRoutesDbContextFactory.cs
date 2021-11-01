using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace AngularRoutes.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class AngularRoutesDbContextFactory : IDesignTimeDbContextFactory<AngularRoutesDbContext>
    {
        public AngularRoutesDbContext CreateDbContext(string[] args)
        {
            AngularRoutesEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<AngularRoutesDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new AngularRoutesDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../AngularRoutes.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
