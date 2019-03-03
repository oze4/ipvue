export function get(name) {
	if (document.cookie.length === 0)
		return null;

	var c_start = document.cookie.indexOf(`${name}=`);
	if (c_start === -1)
		return null;

	c_start = c_start + name.length + 1;
	var c_end = document.cookie.indexOf(';', c_start);
	if (c_end == -1)
		c_end = document.cookie.length;

	return decodeURIComponent(document.cookie.substring(c_start, c_end));
}

export function set(name, value, hours) {
	if (hours > 0) {
		let now = new Date();
		now.setTime(now.getTime() + hours * 3600 * 1000)
		let date = now.toUTCString();
		document.cookie = name + `=${encodeURIComponent(value)}; expires=${date}; path=/`;
	} else {
		document.cookie = name + `=${encodeURIComponent(value)}; path=/`
	}
}

export function remove(name) {
	if (name)
		document.cookie = name + `=''; expires=${new Date(1).toUTCString()}`;
}