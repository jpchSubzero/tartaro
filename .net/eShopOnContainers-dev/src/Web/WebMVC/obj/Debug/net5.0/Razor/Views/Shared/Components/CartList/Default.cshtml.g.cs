#pragma checksum "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "26c3100862c16dda8431545eab1eb3806137eecd"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared_Components_CartList_Default), @"mvc.1.0.view", @"/Views/Shared/Components/CartList/Default.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\_ViewImports.cshtml"
using Microsoft.eShopOnContainers.WebMVC;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\_ViewImports.cshtml"
using Microsoft.eShopOnContainers.WebMVC.ViewModels;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"26c3100862c16dda8431545eab1eb3806137eecd", @"/Views/Shared/Components/CartList/Default.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7a8df6003e341ae5961d037ca28f95085b4c0136", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared_Components_CartList_Default : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Microsoft.eShopOnContainers.WebMVC.ViewModels.Basket>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\n");
#nullable restore
#line 3 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
  
    ViewData["Title"] = "My Cart";

#line default
#line hidden
#nullable disable
            WriteLiteral("\n<div class=\"container\">\n");
#nullable restore
#line 8 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
     if (ViewBag.BasketInoperativeMsg != null)
    {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <br />\n        <div class=\"alert alert-warning\" role=\"alert\">\n            &nbsp;");
#nullable restore
#line 12 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
             Write(ViewBag.BasketInoperativeMsg);

#line default
#line hidden
#nullable disable
            WriteLiteral("\n        </div>\n");
#nullable restore
#line 14 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
    }
    else
    {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <article class=\"esh-basket-titles row\">\n            <br />\n");
#nullable restore
#line 19 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
             if (ViewBag.BasketInoperativeMsg != null)
            {

#line default
#line hidden
#nullable disable
            WriteLiteral("                <div class=\"alert alert-warning\" role=\"alert\">\n                    &nbsp;");
#nullable restore
#line 22 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
                     Write(ViewBag.BasketInoperativeMsg);

#line default
#line hidden
#nullable disable
            WriteLiteral("\n                </div>\n");
#nullable restore
#line 24 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
            }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
            <section class=""esh-basket-title col-3"">Product</section>
            <section class=""esh-basket-title col-3 hidden-lg-down""></section>
            <section class=""esh-basket-title col-2"">Price</section>
            <section class=""esh-basket-title col-2"">Quantity</section>
            <section class=""esh-basket-title col-2"">Cost</section>
        </article>
");
#nullable restore
#line 33 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
         for (int i = 0; i < Model.Items.Count; i++)
        {
            var item = Model.Items[i];


#line default
#line hidden
#nullable disable
            WriteLiteral("        <article class=\"esh-basket-items  row\">\n            <section class=\"esh-basket-item esh-basket-item--middle col-lg-3 hidden-lg-down\">\n                <img class=\"esh-basket-image\"");
            BeginWriteAttribute("src", " src=\"", 1290, "\"", 1312, 1);
#nullable restore
#line 39 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
WriteAttributeValue("", 1296, item.PictureUrl, 1296, 16, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" />\n            </section>\n            <section class=\"esh-basket-item esh-basket-item--middle col-3\">");
#nullable restore
#line 41 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
                                                                      Write(item.ProductName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</section>\n            <section class=\"esh-basket-item esh-basket-item--middle col-2\">$ ");
#nullable restore
#line 42 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
                                                                        Write(item.UnitPrice.ToString("N2"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</section>\n            <section class=\"esh-basket-item esh-basket-item--middle col-2\">\n                <input type=\"hidden\"");
            BeginWriteAttribute("name", " name=\"", 1673, "\"", 1709, 1);
#nullable restore
#line 44 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
WriteAttributeValue("", 1680, "quantities[" + i +"].Key", 1680, 29, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            BeginWriteAttribute("value", " value=\"", 1710, "\"", 1726, 1);
#nullable restore
#line 44 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
WriteAttributeValue("", 1718, item.Id, 1718, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" />\n                <input type=\"number\" class=\"esh-basket-input\" min=\"1\"");
            BeginWriteAttribute("name", " name=\"", 1800, "\"", 1838, 1);
#nullable restore
#line 45 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
WriteAttributeValue("", 1807, "quantities[" + i +"].Value", 1807, 31, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            BeginWriteAttribute("value", " value=\"", 1839, "\"", 1861, 1);
#nullable restore
#line 45 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
WriteAttributeValue("", 1847, item.Quantity, 1847, 14, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" />\n            </section>\n            <section class=\"esh-basket-item esh-basket-item--middle esh-basket-item--mark col-2\">$ ");
#nullable restore
#line 47 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
                                                                                              Write(Math.Round(item.Quantity * item.UnitPrice, 2).ToString("N2"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</section>\n        </article>\n");
            WriteLiteral("            <div class=\"esh-basket-items--border row\">\n");
#nullable restore
#line 51 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
                 if (item.OldUnitPrice != 0)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <div class=\"alert alert-warning esh-basket-margin12\" role=\"alert\">&nbsp;Note that the price of this article changed in our Catalog. The old price when you originally added it to the basket was $ ");
#nullable restore
#line 53 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
                                                                                                                                                                                                                  Write(item.OldUnitPrice);

#line default
#line hidden
#nullable disable
            WriteLiteral(" </div>\n");
#nullable restore
#line 54 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
                }

#line default
#line hidden
#nullable disable
            WriteLiteral("            </div>\n            <br />\n");
#nullable restore
#line 57 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
        }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"        <div class=""container"">
            <article class=""esh-basket-titles esh-basket-titles--clean row"">
                <section class=""esh-basket-title col-10""></section>
                <section class=""esh-basket-title col-2"">Total</section>
            </article>

            <article class=""esh-basket-items row"">
                <section class=""esh-basket-item col-10""></section>
                <section class=""esh-basket-item esh-basket-item--mark col-2"">$ ");
#nullable restore
#line 67 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
                                                                          Write(Model.Total().ToString("N2"));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</section>
            </article>

            <article class=""esh-basket-items row"">
                <section class=""esh-basket-item col-7""></section>
                <section class=""esh-basket-item col-2"">
                    <button class=""btn esh-basket-checkout"" name=""name""");
            BeginWriteAttribute("value", " value=\"", 3284, "\"", 3292, 0);
            EndWriteAttribute();
            WriteLiteral(@" type=""submit"">[ Update ]</button>
                </section>
                <section class=""esh-basket-item col-3"">
                    <input type=""submit""
                           class=""btn esh-basket-checkout""
                           value=""[ Checkout ]"" name=""action"" />
                </section>
            </article>
        </div>
");
#nullable restore
#line 82 "d:\Estudio\Ejercicios\tartaro\.net\eShopOnContainers-dev\src\Web\WebMVC\Views\Shared\Components\CartList\Default.cshtml"
    }

#line default
#line hidden
#nullable disable
            WriteLiteral("    \n</div>\n\n    \n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Microsoft.eShopOnContainers.WebMVC.ViewModels.Basket> Html { get; private set; }
    }
}
#pragma warning restore 1591
