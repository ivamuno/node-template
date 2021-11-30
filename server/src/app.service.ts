import { Injectable } from '@nestjs/common';
import { AppModel } from './app.model';

@Injectable()
export class AppService {
  repo: AppModel[] = [];

  create(model: AppModel): void {
    this.repo.push(model);
  }

  read(key: string): AppModel {
    const index = this.findIndex(key);
    return this.repo[index];
  }

  readAll(): AppModel[] {
    return this.repo;
  }

  update(model: AppModel): AppModel {
    return Object.assign(this.read(model.key), model);
  }

  replace(model: AppModel): void {
    const index = this.findIndex(model.key);
    this.repo[index] = model;
  }

  delete(key: string): void {
    this.repo = this.repo.filter((r) => r.key !== key);
  }

  private findIndex(key: string) {
    return this.repo.findIndex((r) => r.key === key);
  }
}
