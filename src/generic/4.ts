/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface MainProps<T> {
  props: T,
  //  title: string;
}
class Component implements MainProps<T> {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};