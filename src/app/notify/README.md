## Installation

1)
```
npm install notify-angular2
```

2)
Import in your app.module:
```
imports: [NotifyModule]
```

3)
Put this in your root component's html:

```
<notify></notify>
```


## Usage

Inject NotifyService:

```
constructor (
  private notify: NotifyService
) {}
...
```

and use like this:

```
notify.success('cool beans');
```

or like this:
```
notify.error('not cool beans', {
  position: {
    bottom: 0
    left: 0
  }
}
```

## Demo

http://notify.tsmean.com/
