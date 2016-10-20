import { Pipe, PipeTransform } from '@angular/core';
import { Cd } from './cd.model';

@Pipe({
  name: "genre",
  pure: false
})

export class GenrePipe implements PipeTransform {
  transform(input: Cd[], desiredGenre) {
    var output: Cd[] = [];
    if(desiredGenre === "Soundtrack") {
      for(var i=0; i < input.length; i++) {
        if(input[i].genre === "Soundtrack") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredGenre === "Metal") {
      for(var i=0; i < input.length; i++) {
        if(input[i].genre === "Metal") {
          output.push(input[i]);
        }
      }
      return output;
  } else if(desiredGenre === "Pop") {
    for(var i=0; i < input.length; i++) {
      if(input[i].genre === "Pop") {
        output.push(input[i]);
      }
    }
    return output;
  } else if(desiredGenre === "Electronica") {
    for(var i=0; i < input.length; i++) {
      if(input[i].genre === "Electronica") {
        output.push(input[i]);
      }
    }
    return output;
  } else if(desiredGenre === "Shock Rock") {
    for(var i=0; i < input.length; i++) {
      if(input[i].genre === "Shock Rock") {
        output.push(input[i]);
      }
    }
    return output;
    } else {
      return input;
    }
  }
}
