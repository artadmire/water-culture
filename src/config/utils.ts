
export function get(obj: any, path: string, defaultValue:any  = undefined): any {
    if (typeof path !== 'string') return defaultValue;
    let res: any = obj;
    const keyList: any[] = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    for (const p of keyList) {
      res = Object(res)[p]
      if (res === undefined) {
        return defaultValue;
      }
    }
    return res;
}