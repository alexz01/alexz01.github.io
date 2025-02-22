import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { BlogsService } from "./blogs.service";
import { inject } from "@angular/core";
import { BlogsComponent } from "./blogs.component";

export const blogRoutes: Routes = [
    {
        path: '',
        component: BlogsComponent,
        providers: [BlogsService],
        resolve: {
            blogMap: () => inject(BlogsService).getBlogsMap()
        }
    },
    {
        //TODO: the route doesn't work when refreshed, could be because of the .html in path name
        'path': ':blogId',
        loadComponent: () => import('./blog/blog.component').then(i => i.BlogComponent),
        providers: [BlogsService],
        resolve: {
            blogHtml: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
                return inject(BlogsService).getBlog(route.paramMap.get('blogId')!)
            }
        }

    },
];