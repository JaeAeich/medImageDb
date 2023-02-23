# API Endpoints

## /api/study

- GET / - Get all studies
- GET /:studyId - Get a study by ID
- POST / - Create a new study
- PUT /:studyId - Update a study by ID
- DELETE /:studyId - Delete a study by ID

## /api/image

- GET / - Get all images
- GET /:imageId - Get an image by ID
- POST / - Add a new image
- PUT /:imageId - Update an image by ID
- DELETE /:imageId - Delete an image by ID

## /api/annotation

- GET /:imageId - Get all annotations for an image
- POST /:imageId - Add a new annotation to an image
- PUT /:imageId/:annotationId - Update an annotation for an image
- DELETE /:imageId/:annotationId - Delete an annotation for an image
