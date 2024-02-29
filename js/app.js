document.addEventListener('DOMContentLoaded', () => {

	new Vue({

		name: 'cortex-cs',

		el: '#app',

		data: {
			name: 'NAME',
			description: "Description",
			distinctions: [
				{
					name: 'Distinction 1',
					value: 8,
					description: 'Trait description',
					sfx: [
						{
							name: 'Hinder',
							description: 'Gain a PP when you switch out this distinction’s d8 for a d4.',
						}
					]
				},
				{
					name: 'Distinction 2',
					value: 8,
					description: 'Trait description',
					sfx: [
						{
							name: 'Hinder',
							description: 'Gain a PP when you switch out this distinction’s d8 for a d4.',
						}
					]
				},
				{
					name: 'Distinction 3',
					value: 8,
					description: 'Trait description',
					sfx: [
						{
							name: 'Hinder',
							description: 'Gain a PP when you switch out this distinction’s d8 for a d4.',
						}
					]
				}
			],
			attributes: [
				{
					name: 'Attribute 1',
					value: 6,
					description: 'Trait description.'
				},
				{
					name: 'Attribute 2',
					value: 6,
					description: 'Trait description.'
				},
				{
					name: 'Attribute 3',
					value: 6,
					description: 'Trait description.'
				}
			],
			traitGroups: [
				{
					name: 'New Trait Group',
					style: 'default',
					page: 1,
					column: 1,
					traits: [
						{
							name: 'New Trait',
							value: 6,
							description: 'Trait description',
						},
						{
							name: 'New Trait',
							value: 6,
							description: 'Trait description',
						},
						{
							name: 'New Trait',
							value: 6,
							description: 'Trait description',
						}
					]
				},
				{
					name: 'New Trait Group',
					style: 'values',
					page: 1,
					column: 1,
					traits: [
						{
							name: 'New Trait',
							value: 6,
							description: 'Trait description',
						},
						{
							name: 'New Trait',
							value: 6,
							description: 'Trait description',
						},
						{
							name: 'New Trait',
							value: 6,
							description: 'Trait description',
						}
					]
				},
				{
					name: 'New Trait Group',
					style: 'signature-asset',
					page: 1,
					column: 2,
					traits: [
						{
							name: 'New Trait',
							value: 6,
							description: 'Trait description',
						},
						{
							name: 'New Trait',
							value: 6,
							description: 'Trait description',
						},
						{
							name: 'New Trait',
							value: 6,
							description: 'Trait description',
						}
					]
				}
			],
			image: {
				value: '',
				x: 0,
				y: 0,
				zoom: 1
			},
		},

		computed: {

		},

		methods: {

			editContent( event, location ) {
				let content = event.target.innerText;

				console.log(event);

				switch ( location[0] ) {
					case 'name':
						this.name = content;
						break;
					default:
						break;
				}

				console.log(this.name);

			}
		}

	});

});
