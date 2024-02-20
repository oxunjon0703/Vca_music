import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { MusicsModule } from './modules/musics/musics.module';
import { LikesModule } from './modules/likes/likes.module';
import { DislikesModule } from './modules/dislikes/dislikes.module';

@Module({
  imports: [UsersModule, MusicsModule, LikesModule, DislikesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
