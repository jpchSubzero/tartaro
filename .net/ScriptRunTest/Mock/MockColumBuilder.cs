using System;
using System.Collections.Generic;
using System.Text;

namespace ScriptRunTest.Mock
{
    public static class MockColumBuilder
    {

        /// <summary>
        /// Genera las columnas que se van a presentar. Básico, 3 campos de input
        /// </summary>
        /// <returns></returns>
        public static QueryBuilderColumnModelView GetBuildColumnsBasic()
        {
            var model = new QueryBuilderColumnModelView();
            var columns = new List<QueryBuilderColumn>();

            AddColumn(columns, "name", "Nombre", ColumnType.String);
            AddColumn(columns, "age", "Edad", ColumnType.Number);
            AddColumn(columns, "birthday", "Fecha nacimiento", ColumnType.Date);

            model.Columns = columns;

            return model;
        }

        /// <summary>
        /// Genera las columnas que se van a presentar. Parametrizados los operadores, 5 campos de input
        /// </summary>
        /// <returns></returns>
        public static QueryBuilderColumnModelView GetBuildColumnsParams()
        {
            var model = new QueryBuilderColumnModelView();
            var columns = new List<QueryBuilderColumn>();

            AddColumn(columns, "name", "Nombre", ColumnType.String, GetStringOperators());
            AddColumn(columns, "age", "Edad", ColumnType.Number, GetNumberOperators());
            AddColumn(columns, "birthday", "Fecha nacimiento", ColumnType.Date, GetDateOperators());
            AddColumn(columns, "city", "Ciudad", ColumnType.String, GetStringOperators());
            AddColumn(columns, "categories", "Categorías", ColumnType.String, GetStringOperators());

            model.Columns = columns;

            return model;
        }

        /// <summary>
        /// Genera las columnas que se van a presentar. Parametrizados los operadores, valores y tipos de selección, 3 campos de input, 1 de selcción simple y 1 de multiselección
        /// </summary>
        /// <returns></returns>
        public static QueryBuilderColumnModelView GetBuildColumnsComplete()
        {
            var model = new QueryBuilderColumnModelView();
            var columns = new List<QueryBuilderColumn>();

            AddColumn(columns, "name", "Nombre", ColumnType.String, GetStringOperators());
            AddColumn(columns, "age", "Edad", ColumnType.Number, GetNumberOperators());
            AddColumn(columns, "birthday", "Fecha nacimiento", ColumnType.Date, GetDateOperators());
            AddColumn(columns, "city", "Ciudad", ColumnType.String, GetCityOperators(), GetCityValues(), "SingleSelect");
            AddColumn(columns, "categories", "Categorías", ColumnType.String, GetCategoriesOperators(), GetCategoriesValues(), "MultiSelect");

            model.Columns = columns;

            return model;
        }

        /// <summary>
        /// Genera cada columna a través de parámetros obligatorios y opcionales
        /// </summary>
        /// <param name="columns"></param>
        /// <param name="Field"></param>
        /// <param name="Label"></param>
        /// <param name="Type"></param>
        /// <param name="Operators"></param>
        /// <param name="Values"></param>
        /// <param name="Template"></param>
        private static void AddColumn(List<QueryBuilderColumn> columns, string Field, string Label, string Type, object Operators = null, object Values = null, object Template = null)
        {
            var column = new QueryBuilderColumn();
            column.Field = Field;
            column.Label = Label;
            column.Type = Type;
            if (Operators != null) column.Operators = Operators;
            if (Values != null) column.Values = Values;
            if (Template != null) column.Template = new { create = $"Create{Template}", destroy = $"Destroy{Template}", write = $"Write{Template}" };

            columns.Add(column);
        }

        /// <summary>
        /// Genera operadores para tipo string
        /// </summary>
        /// <returns></returns>
        private static List<object> GetStringOperators()
        {
            return new List<object> {
                new { key = "Igual", value = "equal" },
                new { key = "Diferente", value = "notequal" },
                new { key = "Inicia con", value = "startswith" },
                new { key = "Termina con", value = "endswith" },
                new { key = "Contiene", value = "contains" },
            };
        }

        /// <summary>
        /// Genera operadores para tipo boolean
        /// </summary>
        /// <returns></returns>
        private static List<object> GetBooleanOperators()
        {
            return new List<object> {
                new { key = "Igual", value = "equal" },
                new { key = "Diferente", value = "notequal" }
            };
        }

        /// <summary>
        /// Genera operadores para tipo date
        /// </summary>
        /// <returns></returns>
        private static List<object> GetDateOperators()
        {
            return new List<object> {
                new { key = "Igual", value = "equal" },
                new { key = "Mayor que", value = "greaterthan" },
                new { key = "Menor que", value = "lessthan" },
                new { key = "Menor o igual que", value = "lessthanorequal" },
                new { key = "Mayor o igual que", value = "greaterthanorequal" },
                new { key = "Diferente", value = "notequal" }
            };
        }

        /// <summary>
        /// Genera operadores para tipo número
        /// </summary>
        /// <returns></returns>
        private static List<object> GetNumberOperators()
        {
            return new List<object> {
                new { key = "Igual", value = "equal" },
                new { key = "Mayor que", value = "greaterthan" },
                new { key = "Menor que", value = "lessthan" },
                new { key = "Menor o igual que", value = "lessthanorequal" },
                new { key = "Mayor o igual que", value = "greaterthanorequal" },
                new { key = "Diferente", value = "notequal" }
            };
        }

        /// <summary>
        /// Genera operadores para columna city
        /// </summary>
        /// <returns></returns>
        private static List<object> GetCityOperators()
        {
            return new List<object> {
                new { key = "Igual", value = "equal" },
                new { key = "Diferente", value = "notequal" }
            };
        }

        /// <summary>
        /// Genera operadores para columna categories
        /// </summary>
        /// <returns></returns>
        private static List<object> GetCategoriesOperators()
        {
            return new List<object> {
                new { key = "Incluido en", value = "in" },
                new { key = "No incluido", value = "notin" }
            };
        }

        /// <summary>
        /// Genera valores para city
        /// </summary>
        /// <returns></returns>
        public static List<CatalogType> GetCityValues()
        {
            var catalog = new List<CatalogType>();
            catalog.Add(new CatalogType { Id = "CITY_1", Type = "Loja" });
            catalog.Add(new CatalogType { Id = "CITY_2", Type = "Cuenca" });
            catalog.Add(new CatalogType { Id = "CITY_3", Type = "Guayaquil" });
            catalog.Add(new CatalogType { Id = "CITY_4", Type = "Quito" });
            catalog.Add(new CatalogType { Id = "CITY_5", Type = "Riobamba" });
            catalog.Add(new CatalogType { Id = "CITY_6", Type = "Manabí" });
            catalog.Add(new CatalogType { Id = "CITY_7", Type = "Machala" });
            catalog.Add(new CatalogType { Id = "CITY_8", Type = "Salinas" });

            return catalog;
        }

        /// <summary>
        /// Genera valores para categories
        /// </summary>
        /// <returns></returns>
        public static List<CatalogType> GetCategoriesValues()
        {
            var catalog = new List<CatalogType>();
            catalog.Add(new CatalogType { Id = "CAT_1", Type = "Libros" });
            catalog.Add(new CatalogType { Id = "CAT_2", Type = "Electrónicos" });
            catalog.Add(new CatalogType { Id = "CAT_3", Type = "Zapatos" });
            catalog.Add(new CatalogType { Id = "CAT_4", Type = "Camisas" });

            return catalog;
        }
    }

    public class CatalogType
    {
        public string Id { get; set; }
        public string Type { get; set; }
        public string Desc { get; set; }
    }

    public class ColumnType
    {
        public const string Number = "number";
        public const string String = "string";
        public const string Date = "date";
        public const string Boolean = "boolean";
    }

    /// <summary>
    /// Modelo para la vista
    /// </summary>
    public class QueryBuilderColumnModelView
    {
        public List<QueryBuilderColumn> Columns { get; set; }
    }


}
