## Installation

```
npm install notify-angular2
```

Import in your app.module:
```
imports: [NotifyModule]
```

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
  withShadow: false,
  color: green,
  background: red,
  position: {
    top: 0;
    right: 0;
  }
}
```

## Demo

http://notify.tsmean.com/
