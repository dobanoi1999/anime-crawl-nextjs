interface IStorage {
    type:string,
    keys?:string,
    value?:any,
    onLocalStorage?:any
}
export const Storage  = ({ type, keys, value, onLocalStorage }:IStorage) => {

		switch (type) {
			case 'set':
				keys !== undefined &&  window.localStorage.setItem(keys, value) 
				break
			case 'get':
				keys !== undefined && onLocalStorage(window.localStorage.getItem(keys)) || ''
				break
			case 'remove':
				keys !== undefined && window.localStorage.removeItem(keys)
				break
			case 'clear':
				keys !== undefined && window.localStorage.clear()
				break
			default:
				alert('localStorage type undefined')
				break
		}	
}
