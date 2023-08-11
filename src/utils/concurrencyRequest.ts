export const concurrencyRequest = (promiseList: (() => Promise<Response>)[], maxNum: number) => {
    return new Promise((resolve) => {
        if(promiseList.length === 0) {
            resolve([])
            return 
        }

        const results: any[] = []
        let index = 0;
        let count = 0;

        async function request() {
            if(index === promiseList.length) {
                return
            }
            const i = index;
            const curPromise = promiseList[index]
            index++
            try {
                const res = await curPromise()
                results[i] = res
            } catch (error) {
                results[i] = error
            } finally {
                count ++
                if(count === promiseList.length) {
                    resolve(results)
                }
                request()
            }
        }

        const times = Math.min(maxNum, promiseList.length);
         for(let i = 0; i< times; i ++) {
            request()
         }
    })
}
