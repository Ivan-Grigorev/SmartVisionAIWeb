from django.urls import path

from .views import AddMetadata, CaptionsGenerateCSV, GenerateCSV, HomePage

urlpatterns = [
    path("", HomePage.as_view(), name='homepage'),
    path("add-metadata/", AddMetadata.as_view(), name='add_metadata'),
    path("generate-csv-by-captions/", CaptionsGenerateCSV.as_view(), name='captions_generate_csv'),
    path("generate-csv/", GenerateCSV.as_view(), name='generate_csv'),
]
