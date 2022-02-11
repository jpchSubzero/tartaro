﻿using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Eva.Demo.EntityFrameworkCore
{
    public class DemoHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<DemoHttpApiHostMigrationsDbContext>
    {
        public DemoHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<DemoHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Demo"));

            return new DemoHttpApiHostMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}