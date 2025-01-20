import type { SpotifyArtist } from "../types/type";
export const TestArtists: SpotifyArtist[] = [
	{
		spotifyHref: "https://open.spotify.com/artist/0kbYTNQb4Pb1rPbbaF0pT4",
		spotifyId: "0kbYTNQb4Pb1rPbbaF0pT4",
		genres: [
			"jazz",
			"cool jazz",
			"hard bop",
			"bebop",
			"jazz fusion",
			"jazz blues",
			"free jazz",
		],
		thumbnail:
			"https://i.scdn.co/image/423e826b3c1b23930a255d7cbc2daf733f795507",
		artistName: "Miles Davis",
		type: "Artist",
		artistPopularity: 63,
		numFollowers: 2630556,
	},
	{
		spotifyHref: "https://open.spotify.com/artist/4sQVPSDmfqIxG9W8o2EROX",
		spotifyId: "4sQVPSDmfqIxG9W8o2EROX",
		genres: ["jazz", "hard bop", "cool jazz", "bebop"],
		thumbnail:
			"https://i.scdn.co/image/ab67616d0000b27364351626df25d938db9b9f2f",
		artistName: "Miles Davis Quartet",
		type: "Artist",
		artistPopularity: 34,
		numFollowers: 103892,
	},
];
export const TestArtistSearchResults = {
	href: "https://api.spotify.com/v1/search?offset=0&limit=20&query=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=artist&locale=en-US,en;q%3D0.9",
	limit: 20,
	next: "https://api.spotify.com/v1/search?offset=20&limit=20&query=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=artist&locale=en-US,en;q%3D0.9",
	offset: 0,
	previous: null,
	total: 800,
	items: [
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/0kbYTNQb4Pb1rPbbaF0pT4",
			},
			followers: {
				href: null,
				total: 2630556,
			},
			genres: [
				"jazz",
				"cool jazz",
				"hard bop",
				"bebop",
				"jazz fusion",
				"jazz blues",
				"free jazz",
			],
			href: "https://api.spotify.com/v1/artists/0kbYTNQb4Pb1rPbbaF0pT4",
			id: "0kbYTNQb4Pb1rPbbaF0pT4",
			images: [
				{
					url: "https://i.scdn.co/image/423e826b3c1b23930a255d7cbc2daf733f795507",
					height: 1000,
					width: 1000,
				},
				{
					url: "https://i.scdn.co/image/a318c54208af38364d131a54ced2416423696018",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/8496e6ea230dd47311d85dcf860015792f5ada42",
					height: 200,
					width: 200,
				},
				{
					url: "https://i.scdn.co/image/b1af952a7fb8ac2c4467868d61b5752fc1a01cf0",
					height: 64,
					width: 64,
				},
			],
			name: "Miles Davis",
			popularity: 63,
			type: "artist",
			uri: "spotify:artist:0kbYTNQb4Pb1rPbbaF0pT4",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/4sQVPSDmfqIxG9W8o2EROX",
			},
			followers: {
				href: null,
				total: 103892,
			},
			genres: ["jazz", "hard bop", "cool jazz", "bebop"],
			href: "https://api.spotify.com/v1/artists/4sQVPSDmfqIxG9W8o2EROX",
			id: "4sQVPSDmfqIxG9W8o2EROX",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b27364351626df25d938db9b9f2f",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e0264351626df25d938db9b9f2f",
					height: 300,
					width: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d0000485164351626df25d938db9b9f2f",
					height: 64,
					width: 64,
				},
			],
			name: "Miles Davis Quartet",
			popularity: 34,
			type: "artist",
			uri: "spotify:artist:4sQVPSDmfqIxG9W8o2EROX",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/5RzjqfPS0Bu4bUMkyNNDpn",
			},
			followers: {
				href: null,
				total: 445691,
			},
			genres: [
				"bebop",
				"jazz",
				"hard bop",
				"latin jazz",
				"big band",
				"cool jazz",
			],
			href: "https://api.spotify.com/v1/artists/5RzjqfPS0Bu4bUMkyNNDpn",
			id: "5RzjqfPS0Bu4bUMkyNNDpn",
			images: [
				{
					url: "https://i.scdn.co/image/896485317ae7153ad421012f2f7cb90cf3fbfbff",
					height: 1024,
					width: 1000,
				},
				{
					url: "https://i.scdn.co/image/96daabf66ecd18cc20df9339e0e9c1ba1d2f868f",
					height: 656,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/7662f15f1ef7e479b452a602663975af1b271000",
					height: 205,
					width: 200,
				},
				{
					url: "https://i.scdn.co/image/8368a17dfed9085ca0d6f3eda7ec799fdbeb77fd",
					height: 66,
					width: 64,
				},
			],
			name: "Dizzy Gillespie",
			popularity: 48,
			type: "artist",
			uri: "spotify:artist:5RzjqfPS0Bu4bUMkyNNDpn",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/2ZvrvbQNrHKwjT7qfGFFUW",
			},
			followers: {
				href: null,
				total: 734370,
			},
			genres: ["jazz", "jazz fusion", "jazz funk", "hard bop", "cool jazz"],
			href: "https://api.spotify.com/v1/artists/2ZvrvbQNrHKwjT7qfGFFUW",
			id: "2ZvrvbQNrHKwjT7qfGFFUW",
			images: [
				{
					url: "https://i.scdn.co/image/ab6761610000e5ebca17170af02af227d6ea0c31",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616100005174ca17170af02af227d6ea0c31",
					height: 320,
					width: 320,
				},
				{
					url: "https://i.scdn.co/image/ab6761610000f178ca17170af02af227d6ea0c31",
					height: 160,
					width: 160,
				},
			],
			name: "Herbie Hancock",
			popularity: 55,
			type: "artist",
			uri: "spotify:artist:2ZvrvbQNrHKwjT7qfGFFUW",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/71Ur25Abq58vksqJINpGdx",
			},
			followers: {
				href: null,
				total: 313900,
			},
			genres: ["jazz", "hard bop", "cool jazz", "bebop"],
			href: "https://api.spotify.com/v1/artists/71Ur25Abq58vksqJINpGdx",
			id: "71Ur25Abq58vksqJINpGdx",
			images: [
				{
					url: "https://i.scdn.co/image/7e2b6815b5973d47cccbad1d834089231d9b737e",
					height: 723,
					width: 999,
				},
				{
					url: "https://i.scdn.co/image/399ee45e619648be6ce992228b79354f31b69999",
					height: 463,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/9c69550b77ce6f3d040f32122bff0325e0dddd3c",
					height: 145,
					width: 200,
				},
				{
					url: "https://i.scdn.co/image/5b89bd24901e2d12347296e753027b70e0bfeacd",
					height: 46,
					width: 64,
				},
			],
			name: "Miles Davis Quintet",
			popularity: 50,
			type: "artist",
			uri: "spotify:artist:71Ur25Abq58vksqJINpGdx",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/2fMvylhnE23sAlyePKK8er",
			},
			followers: {
				href: null,
				total: 85685,
			},
			genres: ["hard bop", "jazz", "bebop", "cool jazz", "latin jazz"],
			href: "https://api.spotify.com/v1/artists/2fMvylhnE23sAlyePKK8er",
			id: "2fMvylhnE23sAlyePKK8er",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b273028ede8b512bcdad84b887e1",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e02028ede8b512bcdad84b887e1",
					height: 300,
					width: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00004851028ede8b512bcdad84b887e1",
					height: 64,
					width: 64,
				},
			],
			name: "Kenny Dorham",
			popularity: 45,
			type: "artist",
			uri: "spotify:artist:2fMvylhnE23sAlyePKK8er",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/1VEzN9lxvG6KPR3QQGsebR",
			},
			followers: {
				href: null,
				total: 358761,
			},
			genres: ["hard bop", "jazz", "bebop", "cool jazz"],
			href: "https://api.spotify.com/v1/artists/1VEzN9lxvG6KPR3QQGsebR",
			id: "1VEzN9lxvG6KPR3QQGsebR",
			images: [
				{
					url: "https://i.scdn.co/image/7f0edf46ec91ef070e8dd73d442c8f00241416aa",
					height: 1500,
					width: 1000,
				},
				{
					url: "https://i.scdn.co/image/3f1e8d2aae30da65b95d4984b881530e01906a9a",
					height: 960,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/6f55ffd40872dea2e9ade6757926ac4d1c1e3f7a",
					height: 300,
					width: 200,
				},
				{
					url: "https://i.scdn.co/image/15ff605d1f0a0c704b13cd6362c175f0a0d5aa73",
					height: 96,
					width: 64,
				},
			],
			name: "Sonny Rollins",
			popularity: 49,
			type: "artist",
			uri: "spotify:artist:1VEzN9lxvG6KPR3QQGsebR",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/4WhH68K75YKSAwHAqWFpi1",
			},
			followers: {
				href: null,
				total: 16536,
			},
			genres: ["hard bop", "bebop", "jazz", "cool jazz"],
			href: "https://api.spotify.com/v1/artists/4WhH68K75YKSAwHAqWFpi1",
			id: "4WhH68K75YKSAwHAqWFpi1",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b27396d6fb9c864dfb2d74865ad6",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e0296d6fb9c864dfb2d74865ad6",
					height: 300,
					width: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d0000485196d6fb9c864dfb2d74865ad6",
					height: 64,
					width: 64,
				},
			],
			name: "Philly Joe Jones",
			popularity: 47,
			type: "artist",
			uri: "spotify:artist:4WhH68K75YKSAwHAqWFpi1",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/1sdyFmN4bVOcuFDpTVsxBB",
			},
			followers: {
				href: null,
				total: 92768,
			},
			genres: [
				"hard bop",
				"jazz",
				"bebop",
				"cool jazz",
				"soul jazz",
				"jazz blues",
			],
			href: "https://api.spotify.com/v1/artists/1sdyFmN4bVOcuFDpTVsxBB",
			id: "1sdyFmN4bVOcuFDpTVsxBB",
			images: [
				{
					url: "https://i.scdn.co/image/ab6761610000e5ebdbb5ce7865a18716adba5083",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616100005174dbb5ce7865a18716adba5083",
					height: 320,
					width: 320,
				},
				{
					url: "https://i.scdn.co/image/ab6761610000f178dbb5ce7865a18716adba5083",
					height: 160,
					width: 160,
				},
			],
			name: "Kenny Burrell",
			popularity: 48,
			type: "artist",
			uri: "spotify:artist:1sdyFmN4bVOcuFDpTVsxBB",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/35iymrFS4VnsKn35ebHKX9",
			},
			followers: {
				href: null,
				total: 67554,
			},
			genres: ["jazz", "hard bop", "cool jazz", "bebop"],
			href: "https://api.spotify.com/v1/artists/35iymrFS4VnsKn35ebHKX9",
			id: "35iymrFS4VnsKn35ebHKX9",
			images: [
				{
					url: "https://i.scdn.co/image/d2eb2b8d27ed067ff0a649c74d280a04446d7211",
					height: 1151,
					width: 1000,
				},
				{
					url: "https://i.scdn.co/image/dd5c21173bc998548a20343ca189adc300ad6a66",
					height: 737,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/0b399a318feadaa400a3ae3eb274fe395c370191",
					height: 230,
					width: 200,
				},
				{
					url: "https://i.scdn.co/image/64c6305f23cee4433f2898095e76705e41b248d2",
					height: 74,
					width: 64,
				},
			],
			name: "Red Garland",
			popularity: 51,
			type: "artist",
			uri: "spotify:artist:35iymrFS4VnsKn35ebHKX9",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/0BqALs1lInR9TTOulUADH7",
			},
			followers: {
				href: null,
				total: 93359,
			},
			genres: ["jazz", "cool jazz", "hard bop"],
			href: "https://api.spotify.com/v1/artists/0BqALs1lInR9TTOulUADH7",
			id: "0BqALs1lInR9TTOulUADH7",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b273b62b03a629fec8f1ac2d1c0d",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e022eceabbc54b316b88e0bd8e7",
					height: 300,
					width: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d000048512eceabbc54b316b88e0bd8e7",
					height: 64,
					width: 64,
				},
			],
			name: "Ahmad Jamal Trio",
			popularity: 43,
			type: "artist",
			uri: "spotify:artist:0BqALs1lInR9TTOulUADH7",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/0F3Aew9DSd6fb6192K1K0Y",
			},
			followers: {
				href: null,
				total: 398273,
			},
			genres: ["jazz"],
			href: "https://api.spotify.com/v1/artists/0F3Aew9DSd6fb6192K1K0Y",
			id: "0F3Aew9DSd6fb6192K1K0Y",
			images: [
				{
					url: "https://i.scdn.co/image/ab6761610000e5eb8757d081b1451ea9415230cb",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab676161000051748757d081b1451ea9415230cb",
					height: 320,
					width: 320,
				},
				{
					url: "https://i.scdn.co/image/ab6761610000f1788757d081b1451ea9415230cb",
					height: 160,
					width: 160,
				},
			],
			name: "Keith Jarrett",
			popularity: 53,
			type: "artist",
			uri: "spotify:artist:0F3Aew9DSd6fb6192K1K0Y",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/0JM134st8VY7Ld9T2wQiH0",
			},
			followers: {
				href: null,
				total: 139923,
			},
			genres: ["jazz", "bebop", "cool jazz"],
			href: "https://api.spotify.com/v1/artists/0JM134st8VY7Ld9T2wQiH0",
			id: "0JM134st8VY7Ld9T2wQiH0",
			images: [
				{
					url: "https://i.scdn.co/image/ab6761610000e5eb3c0789f0ae8538e9e24a7d15",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab676161000051743c0789f0ae8538e9e24a7d15",
					height: 320,
					width: 320,
				},
				{
					url: "https://i.scdn.co/image/ab6761610000f1783c0789f0ae8538e9e24a7d15",
					height: 160,
					width: 160,
				},
			],
			name: "Coleman Hawkins",
			popularity: 51,
			type: "artist",
			uri: "spotify:artist:0JM134st8VY7Ld9T2wQiH0",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/5cbutZUQE7SUCA6MsEMbBv",
			},
			followers: {
				href: null,
				total: 98582,
			},
			genres: ["hard bop", "jazz", "bebop", "jazz blues", "cool jazz"],
			href: "https://api.spotify.com/v1/artists/5cbutZUQE7SUCA6MsEMbBv",
			id: "5cbutZUQE7SUCA6MsEMbBv",
			images: [
				{
					url: "https://i.scdn.co/image/ab6761610000e5eb58136a57ebcbd783ab43d363",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab6761610000517458136a57ebcbd783ab43d363",
					height: 320,
					width: 320,
				},
				{
					url: "https://i.scdn.co/image/ab6761610000f17858136a57ebcbd783ab43d363",
					height: 160,
					width: 160,
				},
			],
			name: "Hank Mobley",
			popularity: 48,
			type: "artist",
			uri: "spotify:artist:5cbutZUQE7SUCA6MsEMbBv",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/3ZUZYvTkSr7kJQyAXVpqaL",
			},
			followers: {
				href: null,
				total: 140358,
			},
			genres: [
				"hard bop",
				"jazz funk",
				"jazz",
				"soul jazz",
				"jazz fusion",
				"acid jazz",
			],
			href: "https://api.spotify.com/v1/artists/3ZUZYvTkSr7kJQyAXVpqaL",
			id: "3ZUZYvTkSr7kJQyAXVpqaL",
			images: [
				{
					url: "https://i.scdn.co/image/ab6761610000e5eb2834a7a5ab9df5219a18ca3f",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab676161000051742834a7a5ab9df5219a18ca3f",
					height: 320,
					width: 320,
				},
				{
					url: "https://i.scdn.co/image/ab6761610000f1782834a7a5ab9df5219a18ca3f",
					height: 160,
					width: 160,
				},
			],
			name: "Donald Byrd",
			popularity: 48,
			type: "artist",
			uri: "spotify:artist:3ZUZYvTkSr7kJQyAXVpqaL",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/3CsHGnB9qK3KYH7xmyGAGX",
			},
			followers: {
				href: null,
				total: 5136,
			},
			genres: ["hard bop", "jazz", "bebop"],
			href: "https://api.spotify.com/v1/artists/3CsHGnB9qK3KYH7xmyGAGX",
			id: "3CsHGnB9qK3KYH7xmyGAGX",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b273d3f22288893758b2bff4a4b3",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e02d3f22288893758b2bff4a4b3",
					height: 300,
					width: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00004851d3f22288893758b2bff4a4b3",
					height: 64,
					width: 64,
				},
			],
			name: "Art Taylor",
			popularity: 44,
			type: "artist",
			uri: "spotify:artist:3CsHGnB9qK3KYH7xmyGAGX",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/1W8TbFzNS15VwsempfY12H",
			},
			followers: {
				href: null,
				total: 488252,
			},
			genres: ["jazz", "hard bop", "bebop", "free jazz", "cool jazz"],
			href: "https://api.spotify.com/v1/artists/1W8TbFzNS15VwsempfY12H",
			id: "1W8TbFzNS15VwsempfY12H",
			images: [
				{
					url: "https://i.scdn.co/image/ab6761610000e5ebe43b629d257d42a86c71323d",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616100005174e43b629d257d42a86c71323d",
					height: 320,
					width: 320,
				},
				{
					url: "https://i.scdn.co/image/ab6761610000f178e43b629d257d42a86c71323d",
					height: 160,
					width: 160,
				},
			],
			name: "Charles Mingus",
			popularity: 48,
			type: "artist",
			uri: "spotify:artist:1W8TbFzNS15VwsempfY12H",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/4GTZfDMmFwiIThMu6b39qp",
			},
			followers: {
				href: null,
				total: 685,
			},
			genres: ["jazz"],
			href: "https://api.spotify.com/v1/artists/4GTZfDMmFwiIThMu6b39qp",
			id: "4GTZfDMmFwiIThMu6b39qp",
			images: [
				{
					url: "https://i.scdn.co/image/ab6761610000e5ebb5d42b12b18738b4cef69e96",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616100005174b5d42b12b18738b4cef69e96",
					height: 320,
					width: 320,
				},
				{
					url: "https://i.scdn.co/image/ab6761610000f178b5d42b12b18738b4cef69e96",
					height: 160,
					width: 160,
				},
			],
			name: "Lee Davis",
			popularity: 45,
			type: "artist",
			uri: "spotify:artist:4GTZfDMmFwiIThMu6b39qp",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/4jZOiPysIzYxbDcDEOZmhu",
			},
			followers: {
				href: null,
				total: 35959,
			},
			genres: ["soul jazz", "jazz"],
			href: "https://api.spotify.com/v1/artists/4jZOiPysIzYxbDcDEOZmhu",
			id: "4jZOiPysIzYxbDcDEOZmhu",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b273ef465e1984851e51892f71bc",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e02ef465e1984851e51892f71bc",
					height: 300,
					width: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00004851ef465e1984851e51892f71bc",
					height: 64,
					width: 64,
				},
			],
			name: "Ramsey Lewis Trio",
			popularity: 49,
			type: "artist",
			uri: "spotify:artist:4jZOiPysIzYxbDcDEOZmhu",
		},
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/0AggcZhPMyJglaaruoxJpN",
			},
			followers: {
				href: null,
				total: 37834,
			},
			genres: [],
			href: "https://api.spotify.com/v1/artists/0AggcZhPMyJglaaruoxJpN",
			id: "0AggcZhPMyJglaaruoxJpN",
			images: [
				{
					url: "https://i.scdn.co/image/ab6761610000e5ebf8140417708993f9d0513096",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616100005174f8140417708993f9d0513096",
					height: 320,
					width: 320,
				},
				{
					url: "https://i.scdn.co/image/ab6761610000f178f8140417708993f9d0513096",
					height: 160,
					width: 160,
				},
			],
			name: "DARGZ",
			popularity: 56,
			type: "artist",
			uri: "spotify:artist:0AggcZhPMyJglaaruoxJpN",
		},
	],
};
