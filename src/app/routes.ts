import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { HomeComponent } from './home/home.component'


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {},
        data: {
            name: 'Home'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        resolve: {},
        data: {
            name: 'About'
        }
    },
    {
        path: 'artist',
        component: ArtistComponent,
        resolve: {},
        data: {
            name: 'Artist'
        }
    },
    {
        path: 'artworks',
        component: ArtworksComponent,
        resolve: {},
        data: {
            name: 'Art Works'
        }
    }
];

export const routerModule = RouterModule.forRoot(routes);