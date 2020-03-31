import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './main/index/index.component';
import { CreateComponent } from './main/create/create.component';
import { JoinComponent } from './main/join/join.component';
import { GameComponent } from './main/game/game.component';
import { BoardComponent } from './main/game/board/board.component';
import { StartComponent } from './main/game/start/start.component';
import { PlayersComponent } from './main/game/start/players/players.component';
import { CardComponent } from './main/game/card/card.component';
import { PlayerComponent } from './main/game/board/player/player.component';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IndexComponent,
    CreateComponent,
    JoinComponent,
    GameComponent,
    BoardComponent,
    StartComponent,
    PlayersComponent,
    CardComponent,
    PlayerComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
