import React from 'react'
import ICard from '../interfaces/ICard'

const Utility: React.FC<ICard> = props => {
	return (
		<svg viewBox="0 0 150 147">
			<defs>
				<rect id="a" width="142" height="138.296" rx="21" />
				<filter
					id="b"
					width="200%"
					height="200%"
					x="-50%"
					y="-50%"
					filterUnits="objectBoundingBox">
					<feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
					<feGaussianBlur
						stdDeviation="2"
						in="shadowOffsetOuter1"
						result="shadowBlurOuter1"
					/>
					<feComposite
						in="shadowBlurOuter1"
						in2="SourceAlpha"
						operator="out"
						result="shadowBlurOuter1"
					/>
					<feColorMatrix
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
						in="shadowBlurOuter1"
					/>
				</filter>
				<mask id="c" width="142" height="138.296" x="0" y="0" fill="white">
					<use href="#a" />
				</mask>
			</defs>
			<g fill="none" fillRule="evenodd" transform="translate(4 2)">
				<use fill="black" filter="url(#b)" href="#a" />
				<use
					fill="#FFFFFF"
					stroke="#FFFFFF"
					strokeWidth="14"
					mask="url(#c)"
					href="#a"
				/>
				<text
					fill={
						props.type === 'utility'
							? props.type_color
							: props.name === '?'
							? props.type_color
							: props.name === 'Tax'
							? props.type_color
							: '#fff'
					}
					fontFamily="ArchivoBlack-Regular, Archivo Black"
					fontSize={
						props.name === 'Water works'
							? 12
							: props.name === 'Electricity'
							? 14
							: props.name === '?'
							? 55
							: 18
					}
					fontWeight="700"
					textAnchor="middle"
					alignmentBaseline="central">
					<tspan x="48%" y={props.name === '?' ? '85' : '37.583'}>
						{props.name}
					</tspan>
				</text>
				{props.name === 'Airlines' && (
					<path
						fill="#DB9E9A"
						d="M96.6038115,59.2732331 C94.9044207,57.5751525 92.1542114,57.5751525 90.4548205,59.2758536 L80.1130381,69.9530594 C80.1130381,69.9530594 76.1063017,68.6152968 71.4103751,67.1320968 C72.1873517,64.8601279 71.4771976,63.435889 70.1132302,62.689048 C68.5160385,61.8164232 66.6174901,62.2081872 64.9220301,65.1274183 C61.2939551,64.050395 58.1585331,63.2026649 57.1024738,63.1633575 C54.079733,63.0454353 49.1047238,68.7371498 49.609169,69.8901675 C50.1136142,71.0405648 70.7657333,79.6030313 70.7657333,79.6030313 L57.3409388,93.4693793 C57.0107565,93.7982513 56.7054688,94.129744 56.436868,94.4573058 C56.436868,94.4573058 49.3117428,91.3611912 47.7630305,90.4767743 C46.2130078,89.591047 44,94.235874 44,94.235874 L53.6408002,100.19881 C53.5949415,100.239427 53.5503931,100.278735 53.5045344,100.323283 C52.4052369,101.421271 52.0016807,102.800961 52.5991535,103.401054 C53.1992468,103.998527 54.577627,103.593661 55.6782348,102.494363 C55.7463677,102.430161 55.8013981,102.358097 55.86429,102.291275 L56.5390674,102.963432 L63.1715396,112.863661 C63.1715396,112.863661 67.9107043,112.053928 66.6607283,109.377093 C65.4081319,106.700257 61.8219848,99.0313793 61.8219848,99.0313793 C62.0290039,98.8885624 62.230782,98.7300225 62.4129064,98.5413469 L76.532132,84.8689155 L76.7535639,85.094278 C76.7535639,85.094278 86.5018042,105.695298 87.7897774,106.987201 C89.0751302,108.277795 95.0302044,103.437741 94.74195,100.035029 C94.6397507,98.8518754 93.5994143,95.5120549 92.2891669,91.6559969 C92.5852828,91.4620803 92.8787782,91.2576817 93.1670327,91.0283884 C96.0207514,88.7944166 96.124261,86.7779459 94.9633819,85.3012971 C93.9413889,83.997601 92.2813055,83.5521169 89.9464447,85.0012505 C88.0963753,79.86115 86.4192586,75.4285832 86.4192586,75.4285832 L96.6090525,65.4287752 C98.3032024,63.7280741 98.3032024,60.9739342 96.6038115,59.2732331 Z"
					/>
				)}

				{props.name === 'Railway' && (
					<path
						fill="#DB9E9A"
						d="M93.4634942,110.295981 L84.9638897,94.8190892 C87.3742253,94.4385099 89.1501626,92.2818938 89.1501626,89.8714587 L89.1501626,67.0367004 C89.1501626,60.947531 84.2026316,56 78.1133627,56 L63.6513491,56 C57.5620802,56 52.4876895,60.947531 52.4876895,67.1636596 L52.4876895,89.8715582 C52.4876895,92.4087536 54.2637262,94.4385099 56.6740618,94.8191887 L48.3013171,110.295981 C47.6670183,111.564579 48.0475976,113.086896 49.3161952,113.721195 C49.6967746,113.974914 50.0773539,113.974914 50.4579332,113.974914 C51.3459515,113.974914 52.2339699,113.467475 52.6145492,112.706317 L53.3757078,111.437719 L88.3890039,111.437719 L89.1500631,112.706317 C89.6576016,113.594335 90.4186608,113.974914 91.3067787,113.974914 C91.6872585,113.974914 92.0678377,113.848154 92.4485166,113.721195 C93.7171143,113.086896 94.0977931,111.564579 93.4634942,110.295981 Z M81.5385765,98.8786017 L60.2261353,98.8786017 L62.3827514,94.945949 L79.3819604,94.945949 L81.5385765,98.8786017 Z M81.1580966,90.3789973 C79.1283403,90.3789973 77.4790638,88.7298203 77.4790638,86.6999644 C77.4790638,84.6702082 79.1282409,83.0210313 81.1580966,83.0210313 C83.1877535,83.0210313 84.8370299,84.6702082 84.8370299,86.6999644 C84.8369304,88.6029605 83.1877535,90.3789973 81.1580966,90.3789973 Z M56.9277814,68.5591171 C56.9277814,64.6264643 60.0992756,61.45497 63.9050687,61.45497 L77.7327834,61.45497 C81.5385765,61.45497 84.8369304,64.6264643 84.8369304,68.5591171 L84.8369304,74.648386 C84.8369304,76.0438434 83.6951925,77.0587216 82.299735,77.0587216 L59.4649767,77.0587216 C58.0695193,77.0587216 57.0546411,75.9169837 57.0546411,74.648386 L56.9277814,68.5591171 L56.9277814,68.5591171 Z M60.6067147,82.894271 C62.636471,82.894271 64.2856479,84.5434479 64.2856479,86.5733037 C64.2856479,88.6029605 62.636471,90.252237 60.6067147,90.252237 C58.5769584,90.252237 56.9277814,88.60306 56.9277814,86.5733037 C56.9277814,84.5434479 58.5770579,82.894271 60.6067147,82.894271 Z M55.4055636,107.631926 L58.1964785,102.684395 L83.5684322,102.684395 L86.3593472,107.631926 L55.4055636,107.631926 Z"
					/>
				)}

				{props.name === 'Water works' && (
					<path
						fill="#DB9E9A"
						d="M95.6456474,88.4885178 L95.6456474,91.8308915 C95.6456474,92.9174776 94.7652058,93.7979193 93.6786196,93.7979193 L83.9670098,93.7979193 C82.8804236,93.7979193 81.9999819,92.9174776 81.9999819,91.8308915 L81.9999819,88.4885178 C81.9999819,87.5356895 82.6771641,86.741797 83.5764892,86.5605682 L83.5764892,82.7980374 C83.5764892,82.1266252 83.03018,81.580316 82.3587678,81.580316 L81.9590678,81.580316 C80.1499267,84.8369273 76.7375268,86.8763417 72.9309345,86.8763417 C69.1243423,86.8763417 65.7122047,84.8369273 63.9028013,81.580316 L48.9670278,81.580316 C47.8804417,81.580316 47,80.6998743 47,79.6132882 L47,73.1179 C47,72.0313138 47.8804417,71.1508721 48.9670278,71.1508721 L64.1050118,71.1508721 C65.3502715,69.112769 67.257764,67.5879291 69.4689656,66.799282 L69.4689656,64.3564957 C69.4689656,64.2216888 69.4826036,64.0902913 69.5085684,63.9630902 L64.2282789,63.9630902 C63.1416927,63.9630902 62.261251,63.0826485 62.261251,61.9960623 L62.261251,59.1792785 C62.261251,58.0926923 63.1416927,57.2122506 64.2282789,57.2122506 L69.4687033,57.2122506 L69.4687033,56.9670278 C69.4687033,55.8804417 70.3491449,55 71.4357311,55 L74.4256134,55 C75.5121996,55 76.3926413,55.8804417 76.3926413,56.9670278 L76.3926413,57.2122506 L81.633328,57.2122506 C82.7199141,57.2122506 83.6003558,58.0926923 83.6003558,59.1792785 L83.6003558,61.9960623 C83.6003558,63.0826485 82.7199141,63.9630902 81.633328,63.9630902 L76.3530384,63.9630902 C76.3787409,64.0902913 76.3926413,64.2216888 76.3926413,64.3564957 L76.3926413,66.799282 C78.6038428,67.5879291 80.5113353,69.1125068 81.756595,71.1508721 L85.5432547,71.1508721 C90.1746874,71.1508721 93.9427259,74.9186484 93.9427259,79.550081 L93.9427259,86.5411602 C94.9042091,86.6704595 95.6456474,87.4918903 95.6456474,88.4885178 Z M93.5991517,107.376706 C93.5755473,107.258422 93.5414522,107.144072 93.497653,107.034443 L90.5733383,97.7183369 C90.3163134,96.8982174 89.5559915,96.3403683 88.6967938,96.3403683 C87.837596,96.3403683 87.0772742,96.8982174 86.8202492,97.7183369 L83.8523976,107.173446 C83.8374482,107.220655 83.824597,107.268126 83.8135816,107.315859 C83.6562194,107.814697 83.5770137,108.32796 83.5770137,108.845158 C83.5770137,111.668498 85.8739777,113.9652 88.697056,113.9652 C91.5201344,113.9652 93.8170984,111.668236 93.8170984,108.845158 C93.8168361,108.349204 93.7434004,107.856661 93.5991517,107.376706 Z"
					/>
				)}

				{props.name === 'Electricity' && (
					<path
						fill="#DB9E9A"
						d="M86.9577268,75.2350806 C86.7983685,74.8889158 86.4551619,74.6667435 86.0770992,74.6667435 L74.5586602,74.6667435 L85.9263982,56.509458 C86.1159421,56.2066215 86.1275607,55.8231207 85.956584,55.5094522 C85.7854932,55.1947465 85.4588032,55 85.1050031,55 L69.5527186,55 C69.184338,55 68.8479659,55.2104184 68.6827984,55.5437921 L54.102496,85.0438497 C53.9517949,85.3477233 53.9683116,85.70956 54.1452117,85.9996055 C54.323137,86.2896509 54.6351326,86.4666513 54.972416,86.4666513 L64.967669,86.4666513 L54.0761831,112.635161 C53.890512,113.082617 54.0557934,113.601749 54.4649532,113.855496 C54.6223749,113.952869 54.7973385,114 54.9713909,114 C55.2503531,114 55.5254424,113.879004 55.7160115,113.650954 L86.8206947,76.2841763 C87.064573,75.99125 87.1170849,75.5821672 86.9577268,75.2350806 Z"
					/>
				)}
			</g>
		</svg>
	)
}

export default Utility