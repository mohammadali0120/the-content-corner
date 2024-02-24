import type { Podcast, Video, User } from "~/utilities/types";

// English locale Data
export const podcastsEn: Podcast[] = [
  {
    id: 1,
    title: "Hezar O Yek Shab",
    image: null,
    link: "https://dl.melomusic.ir/1401/11/18/Ebi%20-%201001%20shab.mp3",
    description: "Hezar O Yek Shab, Ebi",
  },
  {
    id: 2,
    title: "Mano Bebakhsh",
    image: null,
    link: "https://dl.melomusic.ir/1401/06/20/Ebi%20-%20Mano%20Bebakhsh.mp3",
    description: "Mano Bebakhsh, Ebi",
  },
  {
    id: 3,
    title: "Maleka",
    image: null,
    link: "https://ts2.tarafdari.com/contents/user330550/content-sound/mohsen_chavoshi_-_maleka_128.mp3",
    description: "Maleka, Mohsen Chavoshi",
  },
  {
    id: 4,
    title: "Something Just Like This",
    image: null,
    link: "https://files.musicfeed.ir/2020/05/The-Chainsmokers-Coldplay-Something-Just-Like-This-128.mp3",
    description: "Something Just Like This, The Chainsmokers",
  },
  {
    id: 5,
    title: "Look What God Gave Her",
    image: null,
    link: "https://ts2.tarafdari.com/contents/user548574/content-sound/thomas_rhett_-_look_what_god_gave_her.mp3",
    description: "Look What God Gave Her, Thomas Rhett",
  },
  {
    id: 6,
    title: "God's Country",
    image: null,
    link: "https://ts2.tarafdari.com/contents/user405293/content-sound/god_s_country_-_blake_shelton.mp3",
    description: "God's Country, Blake Shelton",
  },
];

export const videosEn: Video[] = [
  {
    id: 1,
    title: "Nature Video 1",
    image: null,
    link: "https://persian2.asset.aparat.com/aparat-video/7f2abff5c975c471fda60bb5016413c943932826-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImNjYWNkZmE1MDRhZDdkNWRkOTVlMTRhZWY1NGNmZDhhIiwiZXhwIjoxNzA4NDMyOTgwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.sDbWnaaLRBFYg5BIOn0kgHGtkkZl4Kn0hCggTcb0YGI",
    description: "Nature Video 1, Description",
  },
  {
    id: 2,
    title: "Nature Video 2",
    image: null,
    link: "https://aspb10.asset.aparat.com/aparat-video/6366c626d23b39ba5aca7e89099e37506891122-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjE4ZmFiNTI3YzMyMjcxOTc0MTc3ODVlMzcwNzNiMzJmIiwiZXhwIjoxNzA4NDMyOTY2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.kFroVuLDT7T6TkUoSWmpXimvivL--WqkJQyt6QfeSPQ",
    description: "Nature Video 2, Description",
  },
  {
    id: 3,
    title: "Nature Video 3",
    image: null,
    link: "https://persian3.asset.aparat.com/aparat-video/2e4c20c924662935f89d6d14d295fc6544366871-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImEyYjU1NzlhNTBlMzY2YmU1ZGViMDA2OTkyNzlkZTY4IiwiZXhwIjoxNzA4NDMyOTc0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.tiGwGeeT3y-3FC2lxBl05FAWkvVrn5bXyqk1jMK5QxA",
    description: "Nature Video 3, Description",
  },
  {
    id: 4,
    title: "Nature Video 4",
    image: null,
    link: "https://aspb29.asset.aparat.com/aparat-video/96fb5db682b9e12df6b39de794bad57634949251-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Ijg1YzNiYTI1MjIzNDQ4MDcxOWIxZjAzZDU5MDY0MTk5IiwiZXhwIjoxNzA4NDMzNDE2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.o853w_brLfur7w04Fgdq9Mh3Rtt1hA-kuEVtV6NgzvA",
    description: "Nature Video 4, Description",
  },
  {
    id: 5,
    title: "Nature Video 5",
    image: null,
    link: "https://aspb35.asset.aparat.com/aparat-video/a37b8bb92a304c5b505e58ee0216564e40092228-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImU3ZTQxNzM1ODIxNjUwOGU1M2JkOGIwYzIyNjNhYTVhIiwiZXhwIjoxNzA4NDMzNDE5LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.YiyyHlkXipmwQRDY-Ok0ONv9T9Mm3BtDkYbunenhPQ8",
    description: "Nature Video 5, Description",
  },
  {
    id: 6,
    title: "Nature Video 6",
    image: null,
    link: "https://persian15.asset.aparat.com/aparat-video/3c185919f80662daab3f443f5c91e4a457371881-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjY2OWY0OWE5YzkzOTgxNTgxYTBkNmZjYTM3MzVlZTNlIiwiZXhwIjoxNzA4NDMzNTU4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.p-JU7izrw_gCHO1bI5E7vcTzEqBH8kNt_b_DlU9QvTE",
    description: "Nature Video 6, Description",
  },
];

// Farsi locale Data

export const podcastsFa: Podcast[] = [
  {
    id: 1,
    title: "هزار و یک شب",
    image: null,
    link: "https://dl.melomusic.ir/1401/11/18/Ebi%20-%201001%20shab.mp3",
    description: "هزار و یک شب، ابی",
  },
  {
    id: 2,
    title: "منو ببخش",
    image: null,
    link: "https://dl.melomusic.ir/1401/06/20/Ebi%20-%20Mano%20Bebakhsh.mp3",
    description: "منو ببخش، ابی",
  },
  {
    id: 3,
    title: "ملکا",
    image: null,
    link: "https://ts2.tarafdari.com/contents/user330550/content-sound/mohsen_chavoshi_-_maleka_128.mp3",
    description: "ملکا، محسن چاوشی",
  },
  {
    id: 4,
    title: "Something Just Like This",
    image: null,
    link: "https://files.musicfeed.ir/2020/05/The-Chainsmokers-Coldplay-Something-Just-Like-This-128.mp3",
    description: "Something Just Like This, The Chainsmokers",
  },
  {
    id: 5,
    title: "Look What God Gave Her",
    image: null,
    link: "https://ts2.tarafdari.com/contents/user548574/content-sound/thomas_rhett_-_look_what_god_gave_her.mp3",
    description: "Look What God Gave Her, Thomas Rhett",
  },
  {
    id: 6,
    title: "God's Country",
    image: null,
    link: "https://ts2.tarafdari.com/contents/user405293/content-sound/god_s_country_-_blake_shelton.mp3",
    description: "God's Country, Blake Shelton",
  },
];

export const videosFa: Video[] = [
  {
    id: 1,
    title: "ویدیو طبیعت 1",
    image: null,
    link: "https://persian2.asset.aparat.com/aparat-video/7f2abff5c975c471fda60bb5016413c943932826-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImNjYWNkZmE1MDRhZDdkNWRkOTVlMTRhZWY1NGNmZDhhIiwiZXhwIjoxNzA4NDMyOTgwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.sDbWnaaLRBFYg5BIOn0kgHGtkkZl4Kn0hCggTcb0YGI",
    description: "ویدیو طبیعت 1، توضیحات",
  },
  {
    id: 2,
    title: "ویدیو طبیعت 2",
    image: null,
    link: "https://aspb10.asset.aparat.com/aparat-video/6366c626d23b39ba5aca7e89099e37506891122-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjE4ZmFiNTI3YzMyMjcxOTc0MTc3ODVlMzcwNzNiMzJmIiwiZXhwIjoxNzA4NDMyOTY2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.kFroVuLDT7T6TkUoSWmpXimvivL--WqkJQyt6QfeSPQ",
    description: "ویدیو طبیعت 2، توضیحات",
  },
  {
    id: 3,
    title: "ویدیو طبیعت 3",
    image: null,
    link: "https://persian3.asset.aparat.com/aparat-video/2e4c20c924662935f89d6d14d295fc6544366871-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImEyYjU1NzlhNTBlMzY2YmU1ZGViMDA2OTkyNzlkZTY4IiwiZXhwIjoxNzA4NDMyOTc0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.tiGwGeeT3y-3FC2lxBl05FAWkvVrn5bXyqk1jMK5QxA",
    description: "ویدیو طبیعت 3، توضیحات",
  },
  {
    id: 4,
    title: "ویدیو طبیعت 4",
    image: null,
    link: "https://aspb29.asset.aparat.com/aparat-video/96fb5db682b9e12df6b39de794bad57634949251-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Ijg1YzNiYTI1MjIzNDQ4MDcxOWIxZjAzZDU5MDY0MTk5IiwiZXhwIjoxNzA4NDMzNDE2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.o853w_brLfur7w04Fgdq9Mh3Rtt1hA-kuEVtV6NgzvA",
    description: "ویدیو طبیعت 4، توضیحات",
  },
  {
    id: 5,
    title: "ویدیو طبیعت 5",
    image: null,
    link: "https://aspb35.asset.aparat.com/aparat-video/a37b8bb92a304c5b505e58ee0216564e40092228-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImU3ZTQxNzM1ODIxNjUwOGU1M2JkOGIwYzIyNjNhYTVhIiwiZXhwIjoxNzA4NDMzNDE5LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.YiyyHlkXipmwQRDY-Ok0ONv9T9Mm3BtDkYbunenhPQ8",
    description: "ویدیو طبیعت 5، توضیحات",
  },
  {
    id: 6,
    title: "ویدیو طبیعت 6",
    image: null,
    link: "https://persian15.asset.aparat.com/aparat-video/3c185919f80662daab3f443f5c91e4a457371881-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjY2OWY0OWE5YzkzOTgxNTgxYTBkNmZjYTM3MzVlZTNlIiwiZXhwIjoxNzA4NDMzNTU4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.p-JU7izrw_gCHO1bI5E7vcTzEqBH8kNt_b_DlU9QvTE",
    description: "ویدیو طبیعت 6، توضیحات",
  },
];

// Other

// Typical Password property should be encrypted but we don't need to do this because this is a dummy app and we don't have a proper DB!
export const users: User[] = [
  {
    id: 1,
    fullNameEn: "Mohammadali Khaksar",
    fullNameFa: "محمدعلی خاکسار",
    email: "mohammadali.khaksar.79@gmail.com",
    password: "A123456789b",
    token: "1Z3ZZdoe2voAFOjMfuvsrAdIU6jUmEiL",
  },
  {
    id: 2,
    fullNameEn: "Mohammadali Khaksar",
    fullNameFa: "علی محمدی",
    email: "ali.mohammadi@gmail.com",
    password: "A123456789b",
    token: "U0ZS2lxZrZcRik1k06eTLUIMS6V0PZJl",
  },
  {
    id: 3,
    fullNameEn: "Mohammadali Khaksar",
    fullNameFa: "رضا جوادی",
    email: "reza.javadi@gmail.com",
    password: "A123456789b",
    token: "pLilPR38lbzS5HF0afl2uJNDM4PvuMpu",
  },
  {
    id: 4,
    fullNameEn: "Mohammadali Khaksar",
    fullNameFa: "سعید امیدی",
    email: "saeed.omidi@gmail.com",
    password: "A123456789b",
    token: "NLDWMWXmLKvF55IMSPfNhhdBhlnRXvTv",
  },
];
