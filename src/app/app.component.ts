import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

/**
 * @Component transforme la classe TypeScript en composant Angular.
 * selector:
 * - nom de la balise HTML personnalisée utilisée dans index.html (<app-root>).
 * templateUrl:
 * - chemin vers le fichier HTML du composant (vue).
 * styleUrls:
 * - liste de fichiers CSS appliqués uniquement à ce composant (encapsulation).
 * standalone:
 * - indique que le composant peut être démarré sans NgModule racine.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /**
   * ngOnInit est un hook du cycle de vie Angular.
   * Il est appelé une fois, juste après la création du composant.
   * C'est l'endroit recommandé pour lancer les initialisations simples.
   */
  ngOnInit(): void {
    // Aucune initialisation spécifique pour le moment.
  }
}
