
export type Shape = {
  shape: number[][];
  color: string;
};
export type ShapeKey = keyof typeof localShapes


export const localShapes = {
  s: {
    shape: [[0, 1, 1],
    [1, 1, 0]],
    color: 'lightgreen'
  },
  z: {
    shape: [[1, 1, 0],
    [0, 1, 1]],
    color: 'red'
  },
  t: {
    shape: [[1, 1, 1], [0, 1, 0]],
    color: 'purple'
  },
  i: {
    shape: [[1],
    [1],
    [1],
    [1]],
    color: 'aqua'
  },
  j: {
    shape: [[0, 1],
    [0, 1],
    [1, 1]],
    color: 'blue'
  },
  l: {
    shape: [[1, 0],
    [1, 0],
    [1, 1]],
    color: 'orange'
  },
  o: {
    shape: [[1, 1],
    [1, 1]],
    color: 'yellow'
  }
}





///
const laptop: Laptop = {
  screen: {
    resolution: {
      width: 400,
      height: 200
    },
    brightness: 1200,
    manufacturer: "samsung"
  },

  cpu: {
    cores: 8,
    manufacturer: "intel"
  },

  ram: {
    memory: 16,
  },

  gpu: {
    memory: 6
  }
}



interface Resolution {
  width: number;
  height: number;
}

interface Screen {
  resolution: Resolution;
  brightness: number;
  manufacturer: string;
}

interface CPU {
  cores: number;
  manufacturer: string;
}

interface RAM {
  memory: number;
}

interface GPU {
  memory: number;
}

export interface Laptop {
  screen: Screen;
  cpu: CPU;
  ram: RAM;
  gpu: GPU;
}


type Person = {
  name: string,
  age: number,
  sex: boolean,
}

let user: Person = {
  name: "Gulnoza",
  age: 21,
  sex: true,
}