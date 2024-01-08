from model_training.dark_pattern_model_train import predict_website_dark_pattern_type, create_dark_pattern_detection_model


def create_model():
    create_dark_pattern_detection_model()
    return 'Successfully model created', 200


def parse_website_url(website_id, params):
    website_urls = params['websiteUrls']

    # TODO change implementation of web_scrap method to accept list of website_urls and store their content in given website id
    # web_scrap(website_url, website_id)

    dark_patterns = predict_website_dark_pattern_type(website_id)

    for text, pattern_type in dark_patterns.items():
        print(f"{text}: {pattern_type}")

    return 'Successfully website parsed', 200
