import { Module } from "@nestjs/common";
import { GitService } from "./git.service";
import { GithubService } from "./github.service";
import { GitServiceFactory } from "./git-service-factory";

@Module({
  providers: [GitService, GitServiceFactory, GithubService],
  exports: [GitService, GitServiceFactory, GithubService],
})
export class GitModule {}
