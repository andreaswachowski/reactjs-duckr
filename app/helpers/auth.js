export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Andreas Wachowski',
        avatar: 'http://www.andreas-wachowski.de/images/profile_picture.170254e3.png',
        uid: 'andreaswachowski'
      });
    }, 2000);
  });
}
