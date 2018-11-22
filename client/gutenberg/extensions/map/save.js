/** @format */

/**
 * External dependencies
 */

import { Component } from '@wordpress/element';

class MapSave extends Component {
	render() {
		const { className, attributes } = this.props;
		const { mapStyle, mapDetails, points, zoom, mapCenter, markerColor } = attributes;
		const pointsList = points.map( ( point, index ) => {
			const { longitude, latitude } = point.coordinates;
			const url = 'https://www.google.com/maps/search/?api=1&query=' + latitude + ',' + longitude;
			return (
				<li key={ index }>
					<a href={ url }>{ point.title }</a>
				</li>
			);
		} );
		// All camelCase attribute names converted to kebab-case data attributes
		return (
			<div
				className={ className }
				data-map-style={ mapStyle }
				data-map-details={ mapDetails }
				data-points={ JSON.stringify( points ) }
				data-zoom={ zoom }
				data-map-center={ JSON.stringify( mapCenter ) }
				data-marker-color={ markerColor }
			>
				{ points.length > 0 && <ul>{ pointsList }</ul> }
			</div>
		);
	}
}

export default MapSave;
