import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postItems: Post[] = [
	new Post('Title 1', 'Quand un post a plus de "love it" que de "don\'t love it" (loveIts > 0), il sera coloré en vert, et inversement quand loveIts < 0, il sera coloré en rouge.'),
	new Post('Title 2', 'Information : je vous conseille d\'utiliser Bootstrap pour cet exercice.  Si vous créez des list-group-item dans un list-group, vous avez les classes list-group-item-success et list-group-item-danger pour colorer les item.'),
	new Post('Title 3', 'Bonus : créez un type pour les post, appelé Post, afin de rendre votre code plus lisible.  Vous pouvez même y intégrer un constructeur qui attribue automatiquement la date !')
  ];
}
export class Post {
	title: string;
	content: string;
	loveIts: number;
	created_at: Date;
	
	constructor(_title: string, _content: string) {
		this.title = _title;
		this.content = _content;
		this.loveIts = 0;
		this.created_at = new Date();
	}
}
