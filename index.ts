import {interval} from 'rxjs';

interval(1000).subscribe((e) => {
    console.log(e)
})