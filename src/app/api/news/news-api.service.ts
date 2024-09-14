import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INewsList, INews, ITypeNews } from '../models/news.model';
import { SERVER_URL } from "../../env/env";

@Injectable()
export class NewsApiService {
  public link = SERVER_URL + "/services/news_1.php";

  constructor(
    private http: HttpClient
  ) { }

  public getNewsList(start: number, finish: number, type: ITypeNews): Observable<INewsList[]> {
    return this.http.get<INewsList[]>(`${this.link}/?start=${start}&finish=${finish}&type=${type}`);
  }

  public getNewsItem(id: number): Observable<INews> {
    return this.http.get<INews>(`${SERVER_URL + this.link}/${id}`);
  }
}
