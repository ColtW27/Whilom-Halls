

export const fetchListings = () => {
    return $.ajax({
        url: "api/listings",
        error: (err) => console.log(err)
    })
}
export const fetchListing = (listingId) => {
    return $.ajax({
        url: `api/listings/${listingId}`,
        error: (err) => console.log(err)
    })
}