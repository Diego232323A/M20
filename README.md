# StaffAvailabilityService

A microservice for checking staff availability.

## Endpoints

### Check Staff Availability

- **URL**: `/checkAvailability/:name`
- **Method**: `GET`
- **Description**: Retrieves the availability status of a staff member by their name.

## Example

### Check Availability of John Doe

- **Request**: `GET /checkAvailability/John%20Doe`
- **Response**:
  ```json
  {
    "name": "John Doe",
    "role": "Housekeeping",
    "isAvailable": true
  }
