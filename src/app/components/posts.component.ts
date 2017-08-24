import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";
import {PostService} from "../services/post-service";
import {Post} from "../../../php/classes/post";

@Component({
	templateUrl: "./templates/posts.php"
})

export class PostsComponent {

	posts : Post[] = [];

	constructor(protected postService: PostService){}

	ngOnInit() : void {
		this.getAllPosts();
	}

	getAllPosts() : void {
		this.postService.getAllPosts()
			.subscribe(posts=>this.posts = posts);

	}
}