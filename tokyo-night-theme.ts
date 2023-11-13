
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const tokyoNightTheme: CustomThemeConfig = {
    name: 'tokyo-night',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #f7768e 
		"--color-primary-50": "254 234 238", // #feeaee
		"--color-primary-100": "253 228 232", // #fde4e8
		"--color-primary-200": "253 221 227", // #fddde3
		"--color-primary-300": "252 200 210", // #fcc8d2
		"--color-primary-400": "249 159 176", // #f99fb0
		"--color-primary-500": "247 118 142", // #f7768e
		"--color-primary-600": "222 106 128", // #de6a80
		"--color-primary-700": "185 89 107", // #b9596b
		"--color-primary-800": "148 71 85", // #944755
		"--color-primary-900": "121 58 70", // #793a46
		// secondary | #9ece6a 
		"--color-secondary-50": "240 248 233", // #f0f8e9
		"--color-secondary-100": "236 245 225", // #ecf5e1
		"--color-secondary-200": "231 243 218", // #e7f3da
		"--color-secondary-300": "216 235 195", // #d8ebc3
		"--color-secondary-400": "187 221 151", // #bbdd97
		"--color-secondary-500": "158 206 106", // #9ece6a
		"--color-secondary-600": "142 185 95", // #8eb95f
		"--color-secondary-700": "119 155 80", // #779b50
		"--color-secondary-800": "95 124 64", // #5f7c40
		"--color-secondary-900": "77 101 52", // #4d6534
		// tertiary | #7dcfff 
		"--color-tertiary-50": "236 248 255", // #ecf8ff
		"--color-tertiary-100": "229 245 255", // #e5f5ff
		"--color-tertiary-200": "223 243 255", // #dff3ff
		"--color-tertiary-300": "203 236 255", // #cbecff
		"--color-tertiary-400": "164 221 255", // #a4ddff
		"--color-tertiary-500": "125 207 255", // #7dcfff
		"--color-tertiary-600": "113 186 230", // #71bae6
		"--color-tertiary-700": "94 155 191", // #5e9bbf
		"--color-tertiary-800": "75 124 153", // #4b7c99
		"--color-tertiary-900": "61 101 125", // #3d657d
		// success | #bb9af7 
		"--color-success-50": "245 240 254", // #f5f0fe
		"--color-success-100": "241 235 253", // #f1ebfd
		"--color-success-200": "238 230 253", // #eee6fd
		"--color-success-300": "228 215 252", // #e4d7fc
		"--color-success-400": "207 184 249", // #cfb8f9
		"--color-success-500": "187 154 247", // #bb9af7
		"--color-success-600": "168 139 222", // #a88bde
		"--color-success-700": "140 116 185", // #8c74b9
		"--color-success-800": "112 92 148", // #705c94
		"--color-success-900": "92 75 121", // #5c4b79
		// warning | #cfc9c2 
		"--color-warning-50": "248 247 246", // #f8f7f6
		"--color-warning-100": "245 244 243", // #f5f4f3
		"--color-warning-200": "243 242 240", // #f3f2f0
		"--color-warning-300": "236 233 231", // #ece9e7
		"--color-warning-400": "221 217 212", // #ddd9d4
		"--color-warning-500": "207 201 194", // #cfc9c2
		"--color-warning-600": "186 181 175", // #bab5af
		"--color-warning-700": "155 151 146", // #9b9792
		"--color-warning-800": "124 121 116", // #7c7974
		"--color-warning-900": "101 98 95", // #65625f
		// error | #565f89 
		"--color-error-50": "230 231 237", // #e6e7ed
		"--color-error-100": "221 223 231", // #dddfe7
		"--color-error-200": "213 215 226", // #d5d7e2
		"--color-error-300": "187 191 208", // #bbbfd0
		"--color-error-400": "137 143 172", // #898fac
		"--color-error-500": "86 95 137", // #565f89
		"--color-error-600": "77 86 123", // #4d567b
		"--color-error-700": "65 71 103", // #414767
		"--color-error-800": "52 57 82", // #343952
		"--color-error-900": "42 47 67", // #2a2f43
		// surface | #24283b 
		"--color-surface-50": "222 223 226", // #dedfe2
		"--color-surface-100": "211 212 216", // #d3d4d8
		"--color-surface-200": "200 201 206", // #c8c9ce
		"--color-surface-300": "167 169 177", // #a7a9b1
		"--color-surface-400": "102 105 118", // #666976
		"--color-surface-500": "36 40 59", // #24283b
		"--color-surface-600": "32 36 53", // #202435
		"--color-surface-700": "27 30 44", // #1b1e2c
		"--color-surface-800": "22 24 35", // #161823
		"--color-surface-900": "18 20 29", // #12141d
		
	}
}
