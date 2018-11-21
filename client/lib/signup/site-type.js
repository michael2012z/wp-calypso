/** @format **/
/**
 * Exernal dependencies
 */
import i18n from 'i18n-calypso';

/**
 * Internal dependencies
 */

/**
 * Current list of site types that are displayed in the signup site-type step
 * Some (or all) of these site types will also have landing pages.
 * A user who comes in via a landing page will not see the Site Topic dropdown.
 */
export const allSiteTypes = [
	{
		type: i18n.translate( 'Blog' ),
		description: i18n.translate( 'Share and discuss ideas, updates, or creations.' ),
		designType: 'blog',
	},
	{
		type: i18n.translate( 'Business' ),
		description: i18n.translate( 'Promote products and services.' ),
		designType: 'store',
	},
	{
		type: i18n.translate( 'Professional' ),
		description: i18n.translate( 'Showcase your portfolio and work.' ),
		designType: 'portfolio',
	},
	{
		type: i18n.translate( 'Education' ),
		description: i18n.translate( 'Share school projects and class info.' ),
		designType: 'page',
	},
	{
		type: i18n.translate( 'Non-profit Organization' ),
		description: i18n.translate( 'Raise money and awareness for a cause.' ),
		designType: 'page',
	},
];

function isSiteTypeInList( siteType ) {
	const allSiteTypesFiltered = allSiteTypes.map( elem => {
		return elem.type;
	} );
	const sanitizedSiteTypes = allSiteTypesFiltered.map( dasherize );
	siteType = dasherize( siteType );
	return allSiteTypesFiltered.includes( siteType ) || sanitizedSiteTypes.includes( siteType );
}

export function dasherize( string ) {
	return string
		.toLowerCase()
		.replace( / /g, '-' )
		.replace( /-+/, '-' );
}

export function isValidLandingPageSiteType( siteType ) {
	if ( ! siteType || siteType === '' ) {
		return false;
	}
	return isSiteTypeInList( siteType );
}
