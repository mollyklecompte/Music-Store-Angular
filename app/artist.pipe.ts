import { Pipe, PipeTransform } from '@angular/core';
import { Cd } from './cd.model';

@Pipe({
  name: "artist",
  pure: false
})

export class ArtistPipe implements PipeTransform {
  transform(input: Cd[], desiredArtist) {
    var output: Cd[] = [];
    if(desiredArtist === "Rob Zombie") {
      for(var i=0; i < input.length; i++) {
        if(input[i].artist === "Rob Zombie") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredArtist === "Marilyn Manson") {
      for(var i=0; i < input.length; i++) {
        if(input[i].artist === "Marilyn Manson") {
          output.push(input[i]);
        }
      }
      return output;
  } else if(desiredArtist === "The Prodigy") {
    for(var i=0; i < input.length; i++) {
      if(input[i].artist === "The Prodigy") {
        output.push(input[i]);
      }
    }
    return output;
  } else if(desiredArtist === "Actual Sound + Voices") {
    for(var i=0; i < input.length; i++) {
      if(input[i].artist === "Actual Sound + Voices") {
        output.push(input[i]);
      }
    }
    return output;
  } else if(desiredArtist === "Rammstein") {
    for(var i=0; i < input.length; i++) {
      if(input[i].artist === "Rammstein") {
        output.push(input[i]);
      }
    }
    return output;
  } else if(desiredArtist === "Rihanna") {
    for(var i=0; i < input.length; i++) {
      if(input[i].artist === "Rihanna") {
        output.push(input[i]);
      }
    }
    return output;
  } else if(desiredArtist === "Various Artists") {
    for(var i=0; i < input.length; i++) {
      if(input[i].artist === "Various Artists") {
        output.push(input[i]);
      }
    }
    return output;
  } else if(desiredArtist === "Screamin' Jay Hawkins") {
    for(var i=0; i < input.length; i++) {
      if(input[i].artist === "Screamin' Jay Hawkins") {
        output.push(input[i]);
      }
    }
    return output;
  } else if(desiredArtist === "Britney Spears") {
    for(var i=0; i < input.length; i++) {
      if(input[i].artist === "Britney Spears") {
        output.push(input[i]);
      }
  }
  return output;
} else if(desiredArtist === "Kanye West") {
    for(var i=0; i < input.length; i++) {
      if(input[i].artist === "Kanye West") {
        output.push(input[i]);
      }
    }
  return output;
    }else if(desiredArtist === "Madonna") {
      for(var i=0; i < input.length; i++) {
        if(input[i].artist === "Madonna") {
          output.push(input[i]);
        }
      }
  return output;
}else if(desiredArtist === "The Beatles") {
    for(var i=0; i < input.length; i++) {
      if(input[i].artist === "The Beatles") {
        output.push(input[i]);
      }
    }
  return output;
  } else {
  return input;
    }
  }
}
