import { Component, OnInit } from '@angular/core';
import { ILatestNews } from 'src/app/infrastructure/interfaces/ilatest-news';
import { LatestNewsService } from 'src/app/core/services/latest-news/latest-news.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-latest-news',
  templateUrl: './add-latest-news.component.html',
  styleUrls: ['./add-latest-news.component.css']
})
export class AddLatestNewsComponent implements OnInit {

  // variable of login form.
  newsForm: FormGroup;
  /** Array of login user data. */
  private latestNews: ILatestNews[];
  
  constructor(private fb: FormBuilder, private route: Router, private dataService: LatestNewsService,
    private toastrService: ToastrService) {

    /**
     * Login form initialized with default values.
     */
    this.newsForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      summary: ['', Validators.required],
      fullnews: ['', Validators.required],
      imageURL: ['', Validators.required]
    });
  }

  /**
   * This method returns the error messages.
   */
  getErrorMessage() {
    return this.newsForm.get('title').hasError('required') ? 'You must enter a value' :
      this.newsForm.get('description').hasError('required') ? 'You must enter a value' :
      this.newsForm.get('summary').hasError('required') ? 'You must enter a value' :
      this.newsForm.get('fullnews').hasError('required') ? 'You must enter a value' :
      this.newsForm.get('imageURL').hasError('required') ? 'You must enter a value' :
        '';
  }

  ngOnInit() {
   
  }


  resetForm() {
    this.newsForm.reset();
  }

  save(latestNews: ILatestNews) {
    this.dataService.addLatestNews(latestNews).subscribe();
    this.toastrService.success('News added successfully!', 'Latest News');
  }
}
