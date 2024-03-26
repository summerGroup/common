class EventEmitter {
    private event: Record<string, any[]>
    constructor() {
        this.event= {}
    }

    on(type: string, cbres: () => void, cbrej: () => void) {
        if(!this.event[type]) {
            this.event[type] = [[cbres, cbrej]]
        }else {
            this.event[type].push([cbres, cbrej])
        }
    }

    emit(type: string, res: any, anyType: any) {
        if(!this.event[type]) {
            return
        }else {
            this.event[type].forEach((cbArr) => {
                if(anyType === 'resolve') {
                    cbArr[0](res)
                }else {
                    cbArr[1](res)
                }
            })
        }

    }
}